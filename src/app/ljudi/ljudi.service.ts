import { Covek } from './covek.model';
import { Subject } from 'rxjs';

export class LjudiService{
    ljudiChanged = new Subject<Covek[]>();
    ljudi: Covek[] = [
        new Covek('Petrovic Miroljub', '060555333', 'podmacbato@gmail.com'),
        new Covek('Zivkovic Slobodan', '061000222', 'pppcksmiiei@gmail.com'),
      ];

    getLjudi(){
        return this.ljudi.slice();
    }

    getCovek(index: number) {
        return this.ljudi[index];
    }

    addCovek(covek: Covek){
        this.ljudi.push(covek);
        this.ljudiChanged.next(this.ljudi.slice());
    }

    updateCovek(index: number, newCovek: Covek){
        this.ljudi[index] = newCovek;
        this.ljudiChanged.next(this.ljudi.slice());
    }

    deleteCovek(index: number){
        this.ljudi.splice(index, 1);
        this.ljudiChanged.next(this.ljudi.slice());
    }
}
