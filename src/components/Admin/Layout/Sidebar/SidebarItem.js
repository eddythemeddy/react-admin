import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

class SidebarItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            label: this.props.label,
            url: this.props.url,
            details: this.props.details,
            subItems: this.props.subItems,
            icon: this.props.icon,
            iconSize: this.props.iconSize,
            arrowClass: "arrow",
            showSub: "none",
            li: ""
        }
        this.showSubs = this.showSubs.bind(this);
    }
    
    showSubs() {
        const { subItems, arrowClass } = this.state;

        if(subItems !== false && subItems.length > 0) {
            if(arrowClass === "arrow") {
                this.setState({
                    arrowClass: "arrow open active",
                    showSub: "block",
                    li: "open active"
                })
            } else {
                this.setState({
                    arrowClass: "arrow",
                    showSub: "none",
                    li: ""
                })
            }
        }
    }

    render() {
        const Icon = this.state.icon
        const { subItems, url } = this.state
        const subItemsArray = subItems == false ? [] : subItems
        const active = window.location.pathname === url ? 'active' : ''

        return (
            <li className={`${this.state.id === 1 ? 'm-t-10' : ''} ${this.state.li} ${active}`}>
                {( subItems == false ? 
                <Link
                    to={url}
                    className={(this.state.details ? "detailed" : '')}>
                    <span className="title">{this.state.label}</span>
                    {this.state.details && <span className="details">{this.state.details}</span>}
                </Link>
                :
                <a
                    onClick={this.showSubs}
                    className={(this.state.details ? "detailed" : '')}>
                        <span className="title">
                            <Pointer>
                                {this.state.label}
                            </Pointer>
                        </span>
                        {this.state.details &&
                            <span className="details">{this.state.details}</span>
                        }
                        <span className={this.state.arrowClass}></span>
                </a>
                )}
                <span className="icon-thumbnail">
                    <Icon size={16}/>
                </span>                    
                {subItems !== false && 
                    <ul className="sub-menu" style={{display: this.state.showSub}}>                    
                    {subItemsArray.map((e,i) => (
                        <li
                            key={i}
                            className="">
                            <Link
                                to={e.url}>
                                {e.label}
                            </Link>
                            <span className="icon-thumbnail">
                                {e.label.split(' ')[0].charAt(0)}
                                {e.label.split(' ').length > 1 && e.label.split(' ')[1].charAt(0)}
                            </span>
                        </li>
                    ))}
                    </ul>
                }
            </li>
        );
    }
}
 
export default withRouter(SidebarItem);

const Pointer = styled.div`
    cursor: pointer
`;