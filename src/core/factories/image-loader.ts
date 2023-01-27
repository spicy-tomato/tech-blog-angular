import { fromEvent, map, Observable, switchMap } from 'rxjs';
import { ImageService } from 'src/data/services/image.service';

export function imageLoader(
  service: ImageService
): (file: File) => Observable<string> {
  return (file: File) => {
    return service.uploadPostImage(file).pipe(map((r) => r.data.url));
  };
}
