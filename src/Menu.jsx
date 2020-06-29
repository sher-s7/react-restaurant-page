import React from 'react';
import MenuCategory from './MenuCategory'
import MenuItemContent from './MenuItemContent'

export default class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showScrollButton: 'hidden',
        }

        this.scrollFunction = this.scrollFunction.bind(this);
    }

    scrollFunction() {
        if (window.scrollY > 600) {
            this.setState({showScrollButton: ''});
        } else {
            this.setState({showScrollButton: 'hidden'});
        }
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction);
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
      }


    render() {



        const rows = [];
        let lastCategory = null;
        let lastType = null;
        this.props.menuItems.forEach((item) => {
            if (item.type !== lastType) {
                rows.push(
                    <MenuCategory type={item.type} category={item.category !== lastCategory ? item.category.toUpperCase() : null} key={item.category + item.type} />
                );
            }
            rows.push(
                <MenuItemContent price={item.price} description={item.description} name={item.name} img={item.img} key={item.name} />
            );
            lastCategory = item.category;
            lastType = item.type;
        });

        return (
            <div id='menu'>
                <table>
                    <tbody>{rows}</tbody>
                </table>

                <p id='tea-desc-credits'><small>Tea descriptions taken from <a href="https://www.davidstea.com/">DAVIDsTEA</a>,
                &nbsp;<a href="https://gurunavi.com/en/japanfoodie/2016/11/types-of-japanese-tea.html?__ngt__=TT10c5c6681000ac1e4ae71at5QBTye9AVj9pjzblu71za">Gurunavi</a>,
                 and <a href="http://teapedia.org/en/Shincha">teapedia</a></small></p>

                <button id='scrollToTop' className={this.state.showScrollButton} title='Go to top' onClick={this.topFunction}>&#708;</button>
            </div>
        );
    }
}