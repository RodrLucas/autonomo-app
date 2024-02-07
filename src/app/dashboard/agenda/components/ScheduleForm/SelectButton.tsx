'use client'
import CreateClientModal from '@/app/dashboard/components/CreateClientModal';
import { Button, useDisclosure } from '@chakra-ui/react';
import { MenuListProps, components } from 'react-select';

const MenuList = (props: MenuListProps<any>) => {
    const {
        isOpen: isOpenCreateClientModal,
        onOpen: onOpenCreateClientModal,
        onClose: onCloseCreateClientModal
    } = useDisclosure();

    const handleOpenModal = () => {
        onOpenCreateClientModal();
    };


    return (
        <>
            <components.MenuList {...props}>
                {props.children}
                <div className='flex justify-center items-center p-3'>
                    <Button
                        onClick={handleOpenModal}
                        variant='solid'
                        colorScheme='messenger'
                    >Adicionar Cliente</Button>
                </div>
            </components.MenuList>

            <CreateClientModal
                isOpen={isOpenCreateClientModal}
                onClose={onCloseCreateClientModal}
            />
        </>
    );
};

export default MenuList;