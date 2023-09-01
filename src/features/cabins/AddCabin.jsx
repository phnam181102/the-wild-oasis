import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
// import CabinTable from './CabinTable';
import CreateCabinForm from './CreateCabinForm';

function AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.Open opens="cabin-form">
                    <Button>Add new cabin</Button>
                </Modal.Open>

                <Modal.Window name="cabin-form">
                    <CreateCabinForm />
                </Modal.Window>

                {/* Trường hợp có 2 Modal cùng một nơi, vì vậy cần thêm name để xác định */}
                {/* <Modal.Open opens="table">
                    <Button>Show table</Button>
                </Modal.Open>
    
                <Modal.Window name="table">
                    <CabinTable />
                </Modal.Window> */}
            </Modal>
        </div>
    );
}

export default AddCabin;
