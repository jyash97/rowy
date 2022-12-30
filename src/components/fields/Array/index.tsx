import { lazy } from "react";
import DataArrayIcon from "@mui/icons-material/DataArray";

import { IFieldConfig, FieldType } from "@src/components/fields/types";
import withRenderTableCell from "@src/components/Table/TableCell/withRenderTableCell";

import DisplayCell from "./DisplayCell";

const SideDrawerField = lazy(
  () =>
    import("./SideDrawerField" /* webpackChunkName: "SideDrawerField-Array" */)
);
const Settings = lazy(
  () => import("./Settings" /* webpackChunkName: "Settings-Array" */)
);
export const config: IFieldConfig = {
  type: FieldType.array,
  name: "Array",
  group: "Code",
  dataType: "object",
  initialValue: undefined,
  initializable: true,
  icon: <DataArrayIcon />,
  settings: Settings,
  description:
    "Connects to a sub-table in the current row. Also displays number of rows inside the sub-table. Max sub-table depth: 100.",
  TableCell: withRenderTableCell(DisplayCell, SideDrawerField, "popover", {
    popoverProps: { PaperProps: { sx: { p: 1, minWidth: "200px" } } },
  }),
  SideDrawerField,
  requireConfiguration: true,
};
export default config;
