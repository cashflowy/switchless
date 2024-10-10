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