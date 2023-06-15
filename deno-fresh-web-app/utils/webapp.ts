import { computed, signal } from "@preact/signals";
import { type Telegram } from "$types/telegram-web-app.ts";
import { createContext } from "preact";

export const newWindow = window as unknown as Window & { Telegram: Telegram };

const telegramWindow = signal<Telegram>(newWindow.Telegram);

const webApp = computed(() => telegramWindow.value?.WebApp);
const webAppUser = computed(
  () => telegramWindow.value?.WebApp.initDataUnsafe.user
);

export const telegramWebApp = {
  webApp: webApp.value,
  user: webAppUser.value,
};

export const TelegramWebApp = createContext(newWindow.Telegram);
