/** 
 *  @author TalkTao
 * @description  按需引入Vant
*/
import { ConfigProvider,SubmitBar,Checkbox, CheckboxGroup,Card,Divider,Button, Tabbar, TabbarItem, Sticky, NavBar, Icon, Search, DropdownMenu, DropdownItem, Image, Lazyload, Tabs, Tab, Toast, Field, Cell, CellGroup, Form, List } from 'vant'
// import { TextEllipsis } from 'vant'
const pluginsVant = [
	Button,
	Tabbar,
	NavBar,
	Icon,
	Card,
	Divider,
	Checkbox,
	CheckboxGroup,
	SubmitBar,
	ConfigProvider,
	TabbarItem,
	Sticky,
	Cell,
	CellGroup,
	Search,
	Lazyload,
	Tabs,
	Tab,
	Toast,
	Field,
	Form,
	DropdownMenu,
	DropdownItem,
	Image,
	List,
]
export const vantPlugins = {
	install: function (vm) {
		pluginsVant.forEach((item: any) => {
			vm.component(item.name, item);
		});
	}
};
