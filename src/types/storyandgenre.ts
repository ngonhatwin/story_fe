import { Genre } from "./genre";
export interface StoryAndGenre {
    id: number; // Đảm bảo id luôn là number và không undefined
    name?: string; // Có thể undefined nếu dữ liệu thiếu
    urlImage?: string; // Có thể undefined nếu dữ liệu thiếu
    authorName?: string; // Có thể undefined nếu dữ liệu thiếu
    description?: string; // Có thể undefined nếu dữ liệu thiếu
    genres: Genre[]; // Danh sách genres là bắt buộc (rỗng nếu không có thể loại nào)
}
