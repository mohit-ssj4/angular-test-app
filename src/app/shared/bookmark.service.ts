import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: Bookmark[] = [
    new Bookmark('Google', 'https://google.com'),
    new Bookmark('Wikipedia', 'https://wikipedia.org'),
    new Bookmark('YouTube', 'https://youtube.com'),
  ];

  constructor() {}

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((n) => n.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }

  updateBookmark(id: string, updateFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updateFields);
  }

  deleteBookmark(id: string) {
    const toIndex = this.bookmarks.findIndex((n) => n.id === id);
    if (toIndex == -1) return;
    this.bookmarks.splice(toIndex, 1);
  }
}