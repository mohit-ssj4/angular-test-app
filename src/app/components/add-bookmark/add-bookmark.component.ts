import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/shared/bookmark.model';
import { BookmarkService } from 'src/app/shared/bookmark.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css'],
})
export class AddBookmarkComponent implements OnInit {
  constructor(
    private bookmarkService: BookmarkService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    const bookmark = new Bookmark(form.value.name, form.value.url);
    this.bookmarkService.addBookmark(bookmark);
    this.notificationService.show('Bookmark Created');
    this.router.navigateByUrl('/bookmarks');
  }
}
