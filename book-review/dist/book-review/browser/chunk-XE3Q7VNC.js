import {
  ActivatedRoute,
  BookService,
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XP2UASES.js";

// src/app/pages/genre-books/genre-books.ts
var _c0 = (a0) => ["/books", a0];
function GenreBooksComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Loading books...");
    \u0275\u0275elementEnd();
  }
}
function GenreBooksComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function GenreBooksComponent_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const book_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, book_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r2.cover_image, \u0275\u0275sanitizeUrl)("alt", book_r2.title);
  }
}
function GenreBooksComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, GenreBooksComponent_div_7_a_1_Template, 2, 5, "a", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.books);
  }
}
function GenreBooksComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " No books found in this genre. ");
    \u0275\u0275elementEnd();
  }
}
var GenreBooksComponent = class _GenreBooksComponent {
  route;
  bookService;
  cdr;
  genre = "";
  books = [];
  loading = true;
  error = "";
  constructor(route, bookService, cdr) {
    this.route = route;
    this.bookService = bookService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const genreParam = params.get("genre");
      if (!genreParam) {
        this.error = "Genre not found";
        this.loading = false;
        this.cdr.detectChanges();
        return;
      }
      this.genre = genreParam;
      this.loadBooksByGenre();
    });
  }
  loadBooksByGenre() {
    this.loading = true;
    this.error = "";
    console.log("Selected genre:", this.genre);
    this.bookService.getBooks({ genre: this.genre }).subscribe({
      next: (data) => {
        console.log("Books received:", data);
        this.books = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading books:", err);
        this.error = "Failed to load books";
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function GenreBooksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenreBooksComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenreBooksComponent, selectors: [["app-genre-books"]], decls: 9, vars: 5, consts: [[1, "genre-page"], ["routerLink", "/books", 1, "back-link"], [4, "ngIf"], ["class", "books-grid", 4, "ngIf"], [1, "books-grid"], ["class", "book-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "book-card", 3, "routerLink"], [3, "src", "alt"]], template: function GenreBooksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, GenreBooksComponent_p_5_Template, 2, 0, "p", 2)(6, GenreBooksComponent_p_6_Template, 2, 1, "p", 2)(7, GenreBooksComponent_div_7_Template, 2, 1, "div", 3)(8, GenreBooksComponent_p_8_Template, 2, 0, "p", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.genre);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.books.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.books.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n.genre-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 0 20px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 950;\n  color: #134247;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 20px;\n  text-decoration: none;\n  color: #1d5c63;\n  font-weight: 600;\n  transform: translate(0px, 20px);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.books-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 24px;\n  margin-top: 30px;\n}\n.book-card[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n  border-radius: 12px;\n  transition: transform 0.2s ease;\n}\n.book-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n/*# sourceMappingURL=genre-books.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenreBooksComponent, [{
    type: Component,
    args: [{ selector: "app-genre-books", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="genre-page">
    <a routerLink="/books" class="back-link">\u2190 Back to books</a>

    <h1>{{ genre }}</h1>

    <p *ngIf="loading">Loading books...</p>
    <p *ngIf="error">{{ error }}</p>

    <div class="books-grid" *ngIf="!loading && books.length > 0">
        <a
                class="book-card"
                *ngFor="let book of books"
                [routerLink]="['/books', book.id]"
        >
            <img [src]="book.cover_image" [alt]="book.title">
        </a>
    </div>

    <p *ngIf="!loading && !error && books.length === 0">
        No books found in this genre.
    </p>
</div>`, styles: ["/* src/app/pages/genre-books/genre-books.css */\n.genre-page {\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 0 20px;\n}\nh1 {\n  font-size: 36px;\n  font-weight: 950;\n  color: #134247;\n}\n.back-link {\n  display: inline-block;\n  margin-bottom: 20px;\n  text-decoration: none;\n  color: #1d5c63;\n  font-weight: 600;\n  transform: translate(0px, 20px);\n}\n.back-link:hover {\n  opacity: 0.7;\n}\n.books-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 24px;\n  margin-top: 30px;\n}\n.book-card {\n  display: block;\n  text-decoration: none;\n}\n.book-card img {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n  border-radius: 12px;\n  transition: transform 0.2s ease;\n}\n.book-card img:hover {\n  transform: scale(1.03);\n}\n/*# sourceMappingURL=genre-books.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: BookService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenreBooksComponent, { className: "GenreBooksComponent", filePath: "app/pages/genre-books/genre-books.ts", lineNumber: 14 });
})();
export {
  GenreBooksComponent
};
//# sourceMappingURL=chunk-XE3Q7VNC.js.map
