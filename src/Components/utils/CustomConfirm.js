import Swal from "sweetalert2";

const CustomConfirm = (onConfirm, title = "Are you sure?", confirmButtonText = "Delete") => {
  console.log(title);
  Swal.fire({
    title,
    confirmButtonText,
    icon: "warning",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) onConfirm();
  });
};
export default CustomConfirm;
