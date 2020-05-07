import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleMenu } from '../../../../store/actions/generalActions'
import { Scrollbars } from 'react-custom-scrollbars';
import logo from '../../../../assets/img/logo.png';
import pages from '../../../../shared/pages'

class Sidebar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		}
	}

	componentDidUpdate(prevProps) {
		if(prevProps.generals.mobileMenu !== this.props.generals.mobileMenu) {
			this.setState({
				showMenu: this.props.generals.mobileMenu
			})
		}
	}

	render() {
		return (
			<nav className={`page-sidebar ${this.state.showMenu && "visible"}`} data-pages="sidebar">
				<div className="sidebar-shadow"
					style={{
						borderLeft: '1px solid #d7d7d7',
						position: 'absolute',
						height: '100%',
						width: '5px',
						right: '-4px',
						top: '0',
						zIndex: '11'
					}}
				></div>
				<div className="sidebar-header">
					<img src={logo} alt="logo" className="brand" data-src="" data-src-retina={logo} width="100"/>
				</div>
				<div className="sidebar-menu">
					<Scrollbars
					style={{ height: '100%' }}
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					autoHeight
					autoHeightMin={`calc(100vh - 20px)`}
					autoHeightMax={200}
					thumbMinSize={30}
					universal={true}>
						<ul className="menu-items">
							{pages.admin.filter(e => e.sidebar === true).map(e => 
								(
									<SidebarItem
										key={e.id}
										{...e}
										iconSize={15}
									/>
								)
							)}
						</ul>
					</Scrollbars>
					<div className="clearfix"></div>
				</div>
			</nav>
		);
	}
}

Sidebar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    generals: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   generals: state.generals
});

export default connect(mapStateToProps, { toggleMenu })(Sidebar);