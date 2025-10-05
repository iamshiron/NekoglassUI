declare global {
    interface Window {
        __nekoglass_header_scroll_handler?: () => void;
        __nekoglass_last_scroll?: number;
    }
}

export {};
