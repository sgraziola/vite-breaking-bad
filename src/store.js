import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://www.breakingbadapi.com/api/characters",
  error: null,
  characters: null,
  info: null,
});
