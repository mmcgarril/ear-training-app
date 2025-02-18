import ReactDom from 'react-dom'

export default function Modal(props) {
    const { children, handleCloseSettings } = props

    return ReactDom.createPortal(
       <div className='modal-container'>
            <button className='modal-underlay' onClick={handleCloseSettings} />
            <div className='modal-content'>
                {children}
            </div>
       </div>,
       document.getElementById('portal')
    )
}