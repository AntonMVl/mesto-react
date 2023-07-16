import { useEffect } from 'react';

export function Popup({
    isAnyPopupOpen,
    onClose,
    classValue,
    isOpen,
    children,
}) {
    useEffect(() => {
        const handleEscClose = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isAnyPopupOpen) {
            document.addEventListener('keydown', handleEscClose);
        }

        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, [isAnyPopupOpen, onClose]);

    const handleOverlayClick = (e) => {
        if (
            e.target.classList.contains('popup_opened') ||
            e.target.classList.contains('popup__close')
        ) {
            onClose();
        }
    };

    return (
        <section
            className={`popup popup_type_${classValue} ${
                isOpen ? 'popup_opened' : ''
            }`}
            onClick={handleOverlayClick}
        >
            {children}
        </section>
    );
}
