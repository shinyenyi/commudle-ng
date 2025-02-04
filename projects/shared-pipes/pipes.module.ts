import { NgModule } from '@angular/core';
import { CompleteUrlPipe } from './complete-url.pipe';
import { NumkeysPipe } from './numkeys.pipe';
import { OrderByPipe } from './order-by.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SearchByPipe } from './search-by.pipe';
import { TextToLinksPipe } from './text-to-links.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    CompleteUrlPipe,
    TruncateTextPipe,
    TextToLinksPipe,
    NumkeysPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    SearchByPipe,
    OrderByPipe,
    SafePipe,
  ],
  imports: [],
  exports: [
    CompleteUrlPipe,
    TruncateTextPipe,
    TextToLinksPipe,
    NumkeysPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    SearchByPipe,
    OrderByPipe,
    SafePipe,
  ],
})
export class SharedPipesModule {}
