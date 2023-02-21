import React, { KeyboardEvent, useState } from 'react';
import { Modal } from 'antd';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const ok = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleOk()
        }
    }

    return (
        <>
            <button onClick={showModal}>
                Open Modal
            </button>
            <Modal
                title="모달 제목"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    비밀번호 입력 : <input type='password' onKeyPress={ok} />
                </div>
            </Modal>
        </>
    );
};

export default App;