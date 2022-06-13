import React from 'react';
import { Modal, Input } from 'antd';

const CreateComponentModal: any = (props: any) => {
    const [ComponentName, setComponentName] = React.useState("")

    const handleCancel = () => {
        props.setIsModalVisible(false);
    };

    return (
        <>
            <Modal title="Component" visible={props.isModalVisible} onOk={() => props.onSave(ComponentName)} onCancel={handleCancel}>
                <Input placeholder={"Component Name"} value={ComponentName} onChange={(e) => setComponentName(e.target.value)} />
            </Modal>
        </>
    );
};

export default CreateComponentModal;