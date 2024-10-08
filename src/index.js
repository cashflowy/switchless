import Table from './styled/page/Table'
import CurrencyFormatter from './styled/currency/CurrencyFormatter';
import Date from './styled/date/Date';
import DateTime from './styled/date/DateTime';
import CustomTab from './styled/page/CustomTab';
import Link from './primitive/Link';
import PageHeader from './styled/page/PageHeader';
import TableOrCards from './styled/others/TableOrCards';
import TextField from './primitive/TextField';
import Logo from './styled/page/Logo/Logo';
import ClickToEdit from './styled/page/ClickToEdit/ClickToEdit';
import PageHeaderV2 from './styled/page/PageHeaderV2/PageHeaderV2';
import PaginationV2 from './styled/page/PaginationV2/PaginationV2';

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
export { PageHeaderV2 };
export { PaginationV2 };

const Primitive = {
  Link,
  TextField,
}
export {Primitive};

const Styled = {
  Page:{
    CustomTab,
    PageHeader,
    Table,
    Logo,
    ClickToEdit,
    PageHeaderV2,
    PaginationV2,
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