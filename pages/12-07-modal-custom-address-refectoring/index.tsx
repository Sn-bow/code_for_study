import { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const showModal = () => {
    //     setIsModalOpen(prev => !prev);
    // };

    // const handleOk = () => {
    //     setIsModalOpen(prev => !prev);
    // };

    // const handleCancel = () => {
    //     setIsModalOpen(prev => !prev);
    // };

    const isModalOpenHandler = () => {
        setIsModalOpen(prev => !prev)
    }

    // const ok = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter") {
    //         handleOk()
    //     }
    // }

    const handleComplete = (address: Address) => {
        console.log(address)
        isModalOpenHandler()
    }

    return (
        <>
            <button onClick={isModalOpenHandler}>
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
                    onOk={isModalOpenHandler}
                    onCancel={isModalOpenHandler}
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