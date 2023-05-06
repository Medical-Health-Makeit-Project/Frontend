import { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@routes';
import { Button as UpdateButton } from '@components/buttons';
import { TOKEN } from '@constants';
import { successMessage, errorMessage } from '@utils/toastify';
import './updatePassword.components.scss';

export const UpdatePassword = ({ updater, url }) => {
  const [updatePasswordForm, setUpdatePasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    repeatedPassword: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleCurrentPassword = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUpdatePasswordForm({
      ...updatePasswordForm,
      [name]: value,
    });
  };

  const handleUpdateFormPassword = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdatePasswordForm({
      ...updatePasswordForm,
      [name]: value,
    });
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const { newPassword, repeatedPassword } = updatePasswordForm;
      const ACCESS_TOKEN = localStorage.getItem(TOKEN);
      if (!ACCESS_TOKEN) return navigate(PublicRoutes.LOGIN);
      const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
      if (!regex.test(newPassword) || !regex.test(repeatedPassword))
        return errorMessage(
          'The passwords must contain at least one uppercase letter and 16 character as maximum'
        );

      if (newPassword !== repeatedPassword) return errorMessage('The passwords must match');
      const payload = {
        password: newPassword,
      };
      await updater(url, payload, ACCESS_TOKEN);
      successMessage('Your password was updated successfully');
      onClose();
    } catch (error) {
      errorMessage(error.response?.data || error.message);
    }
  };

  return (
    <>
      <UpdateButton color="info" className="updatePasswordBtn" onClick={onOpen}>
        Update Password
      </UpdateButton>
      <form>
        <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={inputRef}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update your password</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  ref={inputRef}
                  name="currentPassword"
                  onChange={handleCurrentPassword}
                  type="password"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>New password</FormLabel>
                <Input name="newPassword" onChange={handleUpdateFormPassword} type="password" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Confirm password</FormLabel>
                <Input
                  name="repeatedPassword"
                  onChange={handleUpdateFormPassword}
                  type="password"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit" onClick={handleUpdatePassword}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
};
