import React, { Component } from "react";
import Drawer from "@atlaskit/drawer";
import { DropdownItem, DropdownItemGroup } from "@atlaskit/dropdown-menu";
import CreateIcon from "@atlaskit/icon/glyph/add";
import SearchIcon from "@atlaskit/icon/glyph/search";
import HelpIcon from "@atlaskit/icon/glyph/question-circle";
import MenuIcon from "@atlaskit/icon/glyph/menu";
import Modal, { ModalTransition } from "@atlaskit/modal-dialog";
import { GlobalItem, GlobalNav } from "@atlaskit/navigation-next";

const ItemComponent = ({ ...itemProps }) => {
	return <GlobalItem {...itemProps} />;
};

const dropdownApp = () => (
	<DropdownItemGroup title="Heading">
		<DropdownItem onClick={() => console.log("Dropdown item clicked")}>
			Dropdown item with onClick
		</DropdownItem>
		<DropdownItem href="//atlassian.com" target="_new">
			Dropdown item with href
		</DropdownItem>
	</DropdownItemGroup>
);

class GlobalNavigationApp extends Component {
	state = {
		isModalOpen: false,
		isDrawerOpen: false,
	};

	openModal = () => this.setState({ isModalOpen: true });

	closeModal = () => this.setState({ isModalOpen: false });

	openDrawer = () => this.setState({ isDrawerOpen: true });

	closeDrawer = () => this.setState({ isDrawerOpen: false });

	render() {
		const { isModalOpen, isDrawerOpen } = this.state;
		return (
			<div>
				<GlobalNav
					itemComponent={ItemComponent}
					primaryItems={[
						{ icon: MenuIcon, id: "Menu", tooltip: "Menu" },
						{
							icon: CreateIcon,
							id: "create",
							tooltip: "Open a modal",
							onClick: this.openModal,
						},
						{
							icon: SearchIcon,
							id: "search",
							tooltip: "Open a drawer",
							onClick: this.openDrawer,
						},
					]}
					secondaryItems={[
						{
							dropdownItems: dropdownApp,
							icon: HelpIcon,
							id: "help",
							tooltip: "Open dropdown",
						},
					]}
				/>

				<ModalTransition>
					{isModalOpen && (
						<Modal
							actions={[
								{ text: "Close", onClick: this.closeModal },
							]}
							onClose={this.closeModal}
							heading="Modal title"
						>
							Modal content
						</Modal>
					)}
				</ModalTransition>

				<Drawer
					onClose={this.closeDrawer}
					isOpen={isDrawerOpen}
					width="narrow"
				>
					Drawer content
				</Drawer>
			</div>
		);
	}
}

export default () => <GlobalNavigationApp />;
