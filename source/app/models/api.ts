export namespace Wiki {
  interface Page {
    UUID: String;
    Title: String;
    Description: String;
    PreviewURL: String;
  }

  interface SearchResult {
    Results: Array<Page>;
  }

  interface Path {
    PathLength: Number;
    Pages: Array<Page>;
  }

  interface Answer {
    PathsCount: Number;
    Paths: Set<Path>;
  }

  type GetPagesBySearchQueryFunction = (query: String) => SearchResult;
  type GetAnswerForTwoPages = (pageA: Page, pageB: Page) => Answer;
}
