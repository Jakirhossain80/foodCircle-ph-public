import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showSuccessAlert = (message) => {
  MySwal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });
};

export const showErrorAlert = (message) => {
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  });
};

export const showConfirmDialog = async (message = 'Are you sure?') => {
  const result = await MySwal.fire({
    title: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
  });

  return result.isConfirmed;
};
