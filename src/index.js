import Table from './styled/page/Table/Table'
import CurrencyFormatter from './styled/currency/CurrencyFormatter/CurrencyFormatter';
import Date from './styled/date/Date/Date';
import DateTime from './styled/date/DateTime/DateTime';
import CustomTab from './styled/page/CustomTab/CustomTab';
import Link from './primitive/Link/Link';
import PageHeader from './styled/page/PageHeader/PageHeader';
import TableOrCards from './styled/others/TableOrCards/TableOrCards';
import TextField from './primitive/TextField/TextField';
import Logo from './styled/page/Logo/Logo';
import ClickToEdit from './styled/page/ClickToEdit/ClickToEdit';
import TabNavigation from './styled/page/TabNavigation/TabNavigation';
import Pagination from './styled/page/Pagination/Pagination';
import MetricCard from './utility/MetricCard/MetricCard';
import NumberFormatter from './utility/NumberFormatter/NumberFormatter';
import GSheetIframe from './utility/GsheetIframe/GSheetIframe';
import LoomIframe from './utility/LoomIframe/LoomIframe';
import Login from './styled/page/Login/Login'
import CustomStepper from './styled/page/Stepper/CustomStepper';
import EmptyState from './styled/page/EmptyState/EmptyState';
import CustomSnackbar from './styled/page/CustomSnackbar/CustomSnackbar';
import CommentCard from './utility/CommentCard/CommentCard';
import MoreOptionsMenu from './utility/MoreOptionsMenu/MoreOptionsMenu';


export { Table };
export { CurrencyFormatter };
export { Date };
export { DateTime };
export { CustomTab };
export { Link };
export { PageHeader };
export { TableOrCards };
export { TextField };
export { Logo };
export { ClickToEdit };
export { TabNavigation };
export { Pagination };
export { MetricCard };
export { NumberFormatter };
export { GSheetIframe }
export { LoomIframe }
export { Login }
export { CustomStepper}
export { EmptyState }
export { CustomSnackbar }
export { CommentCard }
export { MoreOptionsMenu }

const Primitive = {
  Link,
  TextField,
}
export {Primitive};

const Styled = {
  Page:{
    CustomTab,
    CustomStepper,
    EmptyState,
    CustomSnackbar,
    PageHeader,
    Table,
    Login,
    Logo,
    ClickToEdit,
    Pagination,
    TabNavigation,
  },
  Date:{
    Date,
    DateTime,
  },
  Currency:{
    CurrencyFormatter,
  },
  Others:{
    TableOrCards,
  }
}
export {Styled};

const Utility = {
  MetricCard,
  NumberFormatter,
  GSheetIframe,
  LoomIframe,
  CommentCard,
  MoreOptionsMenu
}
export {Utility};

