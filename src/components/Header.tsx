// @ts-nocheck

import { MapPinned, Menu, Phone } from "lucide-react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Header() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const handleOpen = () => setOpen(!open);
  return (
    <header className=" sticky top-0 z-50">
      <section className="absolute -bottom-14 md:-bottom-16 right-4 z-0 ">
        <button
          onClick={handleOpen}
          className="bg-light-blue-700 rounded-full text-sm md:text-base text-white md:px-4 md:py-3 px-3 py-2  sticky "
        >
          Ikuti Undian Bulanan
        </button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader className="-mb-1">Ikuti Undian Bulanan</DialogHeader>

          <DialogBody className="space-y-4">
            <Input label="Nama" />
            <Input label="Email" />
            <Input label="Nomor Telepon" />
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  label="Tanggal Pembelian"
                  onChange={() => null}
                  value={date ? format(date, "PPP") : ""}
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal",
                    day_range_end: "day-range-end",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside:
                      "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                    day_disabled: "text-gray-500 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
            <Select label="Produk Yang Dibeli">
              <Option>Aerox</Option>
              <Option>NMAX</Option>
              <Option>XMAX</Option>
            </Select>
          </DialogBody>
          <DialogFooter>
            {/* <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button> */}
            {/* <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button> */}
            <div>sss</div>
          </DialogFooter>
        </Dialog>
      </section>
      {/* Info */}
      <section className="bg-[#112769] py-2 hidden md:block">
        <div className=" flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex  space-x-5">
            <div className="flex items-center text-xs space-x-2">
              <MapPinned className="size-5 text-[#9FB9F0]" />
              <p className="text-[#EDF2FF]">
                Jl. Jend. Sudirman No.210, Sindangrasa, Kec. Ciamis, Kabupaten
                Ciamis, Jawa Barat 46215
              </p>
            </div>
            <div className="flex items-center text-xs space-x-2">
              <Phone className="size-5 text-[#9FB9F0]" />
              <p className="text-[#EDF2FF]">6281902794798</p>
            </div>
            <div className="flex items-center text-xs space-x-2">
              <svg
                className="size-5"
                fill="#9FB9F0"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 308 308"
              >
                <g id="XMLID_468_">
                  <path
                    id="XMLID_469_"
                    d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
                  />
                  <path
                    id="XMLID_470_"
                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
                  />
                </g>
              </svg>
              <p className="text-[#EDF2FF]">6281902794798</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <p className="text-[#EDF2FF] font-medium text-sm">08:00 - 17:00</p>
            <div className="px-3 py-1 text-xs bg-[#95DC6F] rounded-full">
              BUKA
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <section className="bg-white after:top-0 shadow-sm ">
        <div className="max-w-6xl mx-auto ">
          <header className="flex items-center justify-between  py-6 mx-4 md:mx-0">
            <a href="/">
              <img
                src="/bahana-logo.png"
                alt="Bahana Logo"
                className="w-28 md:w-[125px] md:h-[50px]"
                decoding="async"
                loading="lazy"
              />
            </a>
            <Menu className="md:hidden mr-4" />
            <ul className="hidden  md:flex flex-1 justify-evenly font-bold text-[#08154B]">
              <a href="/#produk-category">
                <li>PRODUK</li>
              </a>
              <li>HARGA CASH & BROSUR CREDIT</li>
              <li>SYARAT CASH / CREDIT</li>
              <li>INFO</li>
            </ul>
          </header>
        </div>
      </section>
    </header>
  );
}

// const Dialogs = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const handleDialogClick = (e: { stopPropagation: () => void }) => {
//     e.stopPropagation();
//   };

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 rounded shadow-lg"
//         onClick={handleDialogClick}
//       >
//         <h2 className="text-2xl mb-4">Form Dialog</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input type="email" className="mt-1 p-2 w-full border rounded" />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

export default Header;
