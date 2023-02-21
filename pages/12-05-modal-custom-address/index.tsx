import { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

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

    // const ok = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter") {
    //         handleOk()
    //     }
    // }

    const handleComplete = (address: Address) => {
        console.log(address)
        handleOk()
    }

    return (
        <>
            <button onClick={showModal}>
                Open Modal
            </button>
            {/* 모달 종료 방식 - 1. 모달 숨기는 방법 (ex, 이력서 등) */}
            {/* <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <DaumPostcodeEmbed onComplete={handleComplete} />
                </div>
            </Modal> */}

            {/* 모달 종료 방식 - 2. 모달 숨기는 방법 (ex, 신용카드, 비밀번호 등 ) */}
            {isModalOpen &&
                <Modal
                    open={true}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div>
                        <DaumPostcodeEmbed onComplete={handleComplete} />
                    </div>
                </Modal>
            }
        </>
    );
};

export default App;