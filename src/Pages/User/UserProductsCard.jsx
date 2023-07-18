import productOne from "../../assets/images/Iphone.png";
import catImgOne from "../../assets/images/laptop.png";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
const UserProductsCard = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const items = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ];
  return (
    <div className="py-5">
      <Link>
        <div className=" grid grid-cols-1 lg:gap-0  gap-4 lg:grid-cols-3 place-items-center ">
          <div className="grid grid-cols-2">
            <div className="">
              <img src={productOne} alt="" />
            </div>
            <div className="flex  flex-col justify-between">
              <h2 className="text-sm lg:text-lg font-semibold">Product name</h2>
              <p
                className="w-8 h-8 rounded-full "
                style={{ backgroundColor: "#fca91e" }}
              ></p>
              <p className="text-base">
                <span className="text-base font-semibold">Brand :</span> Iphone
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center gap-2  w-full">
            <div className="w-full  flex justify-center">
              <Dropdown
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={items}
                defaultValue={1}
                disabled
                virtualScrollerOptions={{ itemSize: 38 }}
                className="w-1/2 lg:w-1/5  "
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserProductsCard;
