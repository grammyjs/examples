/**
 * copied from https://github.com/twa-dev/types/blob/master/index.ts
 */

export interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
  }

  export interface WebAppChat {
    id: number;
    type: "group" | "supergroup" | "channel";
    title: string;
    username?: string;
    photo_url?: string;
  }

  export interface WebAppInitData {
    query_id?: string;
    auth_date: number;
    hash: string;
    user?: WebAppUser & { added_to_attachment_menu?: boolean };
    receiver?: WebAppUser;
    start_param?: string;
    can_send_after?: number;
    chat?: WebAppChat;
    chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
    chat_instance?: string;
  }

  export interface ThemeParams {
    bg_color: `#${string}`;
    secondary_bg_color: `#${string}`;
    text_color: `#${string}`;
    hint_color: `#${string}`;
    link_color: `#${string}`;
    button_color: `#${string}`;
    button_text_color: `#${string}`;
  }

  export interface HapticFeedback {
    impactOccurred: (
      style: "light" | "medium" | "heavy" | "rigid" | "soft"
    ) => HapticFeedback;
    notificationOccurred: (
      type: "error" | "success" | "warning"
    ) => HapticFeedback;
    selectionChanged: () => HapticFeedback;
  }

  export interface BackButton {
    show: VoidFunction;
    hide: VoidFunction;
    onClick: (cb: VoidFunction) => void;
    offClick: (cb: VoidFunction) => void;
  }

  export interface MainButton {
    isActive: boolean;
    isVisible: boolean;
    isProgressVisible: boolean;
    show: VoidFunction;
    hide: VoidFunction;
    enable: VoidFunction;
    disable: VoidFunction;
    hideProgress: VoidFunction;
    showProgress: (leaveActive?: boolean) => void;
    onClick: (callback: VoidFunction) => void;
    offClick: (callback: VoidFunction) => void;
    setText: (text: string) => void;
    setParams: (params: {
      color?: string;
      text?: string;
      text_color?: string;
      is_active?: boolean;
      is_visible?: boolean;
    }) => void;
  }

  export type InvoiceStatuses = "pending" | "failed" | "cancelled" | "paid";

  export type EventNames =
    | "invoiceClosed"
    | "settingsButtonClicked"
    | "backButtonClicked"
    | "mainButtonClicked"
    | "viewportChanged"
    | "themeChanged"
    | "popupClosed"
    | "qrTextReceived"
    | "clipboardTextReceived";

  export type EventParams = {
    invoiceClosed: { url: string; status: InvoiceStatuses };
    settingsButtonClicked: void;
    backButtonClicked: void;
    mainButtonClicked: void;
    viewportChanged: { isStateStable: boolean };
    themeChanged: void;
    popupClosed: { button_id: string | null };
    qrTextReceived: { data: string };
    clipboardTextReceived: { data: string };
  };

  export type PopupParams = {
    title?: string;
    message: string;
    buttons?: PopupButton[];
  };

  export type PopupButton = {
    id?: string;
  } & (
    | {
        type: "default" | "destructive";
        text: string;
      }
    | {
        type: "ok" | "close" | "cancel";
      }
  );

  export type ScanQrPopupParams = {
    text?: string;
  };

  export type Platforms =
    | "android"
    | "android_x"
    | "ios"
    | "macos"
    | "tdesktop"
    | "webk"
    | "webz"
    | "unigram"
    | "unknown";

  export interface WebApp {
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    platform: Platforms;
    headerColor: `#${string}`;
    backgroundColor: `#${string}`;
    isClosingConfirmationEnabled: boolean;
    themeParams: ThemeParams;
    initDataUnsafe: WebAppInitData;
    initData: string;
    colorScheme: "light" | "dark";
    onEvent: <T extends EventNames>(
      eventName: T,
      callback: (params: EventParams[T]) => unknown
    ) => void;
    offEvent: <T extends EventNames>(
      eventName: T,
      callback: (params: EventParams[T]) => unknown
    ) => void;
    sendData: (data: unknown) => void;
    close: VoidFunction;
    expand: VoidFunction;
    MainButton: MainButton;
    HapticFeedback: HapticFeedback;
    openLink: (link: string, options?: { try_instant_view: boolean }) => void;
    openTelegramLink: (link: string) => void;
    BackButton: BackButton;
    version: string;
    isVersionAtLeast: (version: string) => boolean;
    openInvoice: (
      url: string,
      callback?: (status: InvoiceStatuses) => unknown
    ) => void;
    setHeaderColor: (
      color: "bg_color" | "secondary_bg_color" | `#${string}`
    ) => void;
    setBackgroundColor: (
      color: "bg_color" | "secondary_bg_color" | `#${string}`
    ) => void;
    showConfirm: (
      message: string,
      callback?: (confirmed: boolean) => void
    ) => void;
    showPopup: (params: PopupParams, callback?: (id?: string) => unknown) => void;
    showAlert: (message: string, callback?: () => unknown) => void;
    enableClosingConfirmation: VoidFunction;
    disableClosingConfirmation: VoidFunction;
    showScanQrPopup: (
      params: ScanQrPopupParams,
      callback?: (text: string) => void | true
    ) => void;
    closeScanQrPopup: () => void;
    readTextFromClipboard: (callback?: (text: string) => unknown) => void;
    ready: VoidFunction;
    switchInlineQuery: (
      query: string,
      chooseChatTypes?: Array<"users" | "bots" | "groups" | "channels">
    ) => void;
  }

  export interface Telegram {
    WebApp: WebApp;
  }
