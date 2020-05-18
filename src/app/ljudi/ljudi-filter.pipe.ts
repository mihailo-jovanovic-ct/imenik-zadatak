import { PipeTransform, Pipe } from '@angular/core';
import { Covek } from './covek.model';

@Pipe({
    name: 'ljudiFilter'
})

export class LjudiFilterPipe implements PipeTransform{
    transform(ljudi: Covek[], searchTerm: string): Covek[]{
        if (!ljudi || !searchTerm){
            return ljudi;
        }

        return ljudi.filter(ljud =>
            ljud.ime.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
