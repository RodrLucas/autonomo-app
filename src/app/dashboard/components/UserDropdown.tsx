import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const UserDropdown = () => {
  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <MenuList>
          <MenuItem>Meu Perfil</MenuItem>
          <MenuItem>Configurações</MenuItem>
          <MenuItem>Sair</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserDropdown;
