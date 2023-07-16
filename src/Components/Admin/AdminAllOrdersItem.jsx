import React from "react";
import { RadioGroup } from "@headlessui/react";
import productOne from "../../assets/images/Iphone.png";
import catImgOne from "../../assets/images/laptop.png";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
let products = {
  id: 1,
  name: "Throwback Hip Bag",
  href: "#",
  color: "#fca91e",
  price: "$90.00",
  quantity: 1,
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
  imageAlt:
    "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
};
// More products...
const items = [
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
];
const AdminAllOrdersItem = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="border-b-2 border-t-2 py-5  mb-5">
      <div className="flex justify-between">
        <p className="text-sm lg:text-sm pb-5">
          <span className="text-sm lg:text-sm font-semibold">
            Order number :{" "}
          </span>
          #12343254
        </p>
        <button
          type="button"
          class="font-medium text-red-600 hover:text-red-500"
        >
          Remove
        </button>
      </div>

      <Link to="/admin/orders/:id">
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
          <div className="flex justify-center items-center lg:pl-40  w-full ">
            <p className="text-xl font-semibold">200$</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AdminAllOrdersItem;