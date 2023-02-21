import React from 'react';
import { Modal } from 'antd';

const success = () => {
    Modal.success({
        content: '개시글 등록에 성공했습니다.',
    });
};

const error = () => {
    Modal.error({
        title: 'This is an error message',
        content: '개시글 등록에 실패했습니다',
    });
};

const App = () => (
    <>
        <button onClick={success}>Success</button>
        <button onClick={error}>Error</button>
    </>
);

export default App;