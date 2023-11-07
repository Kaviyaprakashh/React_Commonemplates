import { Dropdown } from "react-bootstrap";
import classes from "../commoncomponents/componet.module.css";
import { Data_SIZE } from "../../SharedComponents/Constants";

interface ItemsTypes {
  handleChangeSize: (value: any) => void;
  TableSize: number;
}
export const Itemsperpage = ({ handleChangeSize, TableSize }: ItemsTypes) => {
  return (
    <div
      className={
        "d-flex flex-wrap flex-row align-items-center" + " " + classes.itemspage
      }
    >
      Items per page
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className={`${classes.items_dropdown} mx-2`}
        >
          {TableSize}
        </Dropdown.Toggle>

        <Dropdown.Menu className={"dropdown_size" + " " + classes.contents}>
          {Data_SIZE?.map((ele: number) => {
            return (
              <Dropdown.Item
                className={classes.items}
                key={ele}
                onClick={() => {
                  handleChangeSize(ele);
                }}
              >
                {ele}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
