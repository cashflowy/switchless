import Table from './styled/page/Table'
import CurrencyFormatter from './styled/currency/CurrencyFormatter';
import Date from './styled/date/Date';
import DateTime from './styled/date/DateTime';
import CustomTab from './styled/page/CustomTab';
import Link from './primitive/Link';
import PageHeader from './styled/page/PageHeader';
import TableOrCards from './styled/others/TableOrCards';
import TextField from './primitive/TextField';

export { Table };
export { CurrencyFormatter };
export { Date };
export { DateTime };
export { CustomTab };
export { Link };
export { PageHeader };
export { TableOrCards };
export { TextField };


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