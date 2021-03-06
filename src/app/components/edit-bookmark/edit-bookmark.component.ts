import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from 'src/app/shared/bookmark.model';
import { BookmarkService } from 'src/app/shared/bookmark.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.css'],
})
export class EditBookmarkComponent implements OnInit {
  bookmark!: Bookmark;

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id') as string;
      this.bookmark = this.bookmarkService.getBookmark(idParam) as Bookmark;
    });
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value;
    this.bookmarkService.updateBookmark(this.bookmark.id, {
      name,
      url: new URL(url),
    });
    this.notificationService.show('Bookmark Updated');
  }

  delete() {
    this.bookmarkService.deleteBookmark(this.bookmark.id);
    this.notificationService.show('Bookmark Deleted');
    this.router.navigateByUrl('/bookmarks/manage/edit');
  }
}
