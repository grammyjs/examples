import { User } from "$grammy/deps.ts";

export function getFullName(from: Pick<User, "first_name" | "last_name">) {
  return from.last_name
    ? `${from.first_name} ${from.last_name}`
    : from.first_name;
}

export function getProfileLink(
  {
    username,
    ...from
  }: Pick<User, "first_name" | "id" | "username" | "last_name">,
  html = true
) {
  const url = `https://t.me/${username ? username : `@id${from.id}`}`;
  return html ? `<a href="${url}">${getFullName(from)}</a>` : url;
}
