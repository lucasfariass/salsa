import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[sltInfiniteScroll]',
})
export class InfiniteScrollDirective {
	@Output() sltInfiniteScroll: EventEmitter<boolean> = new EventEmitter();

	@HostListener('window:scroll', ['$event'])
	public onWindowScroll() {
		if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight) {
			this.sltInfiniteScroll.emit(true);
		}
	}
}
