import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable, Subject, Subscriber } from 'rxjs';

interface Dog
{
    name: string;
    color: string;
}

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.scss']
})
export class AsyncObservableComponent implements OnInit
{
    private getDogSync(): Dog
    {
        return {
            name: "Dog",
            color: "black"
        };
    }

    private getDogObservable(): Observable<Dog>
    {
        return new Observable((subscriber: Subscriber<Dog>) => 
        {
            setInterval(
                () => 
                {
                    subscriber.next(this.getDogSync());
                },
                3000
            )
        });
    }

    private getDogSubject(): Subject<Dog>
    {
        let subject: Subject<Dog> = new Subject<Dog>();
        this.getDogObservable().subscribe(subject);
        return subject;
    }

    private syncExample(): void
    {
        let dog: Dog = this.getDogSync();
        console.log(dog);
        console.log("after getDog");
    }

    private observableExample(): void
    {
        let futureDog: Observable<Dog> = this.getDogObservable();
        futureDog.subscribe((dog: Dog) => 
        {
            console.log(dog);
        });
        console.log("after getDog");
    }

    private promiseExample(): void
    {
        let futureDog: Promise<Dog> = firstValueFrom(this.getDogObservable());
        futureDog.then((dog: Dog) => 
        {
            console.log(dog);
        });
        console.log("after getDog");
    }

    private async promiseExampleAsyncAwait(): Promise<void>
    {
        let dog: Dog = await firstValueFrom(this.getDogObservable());
        console.log(dog);
        console.log("after getDog");
    }

    private subjectExample(): void
    {
        let futureDog: Subject<Dog> = this.getDogSubject();
        futureDog.subscribe((dog: Dog) => 
        { 
            console.log("callback 1: " + dog);
        });
        futureDog.subscribe((dog: Dog) => 
        { 
            console.log("callback 2: " + dog);
        });
        futureDog.subscribe((dog: Dog) => 
        { 
            console.log("callback 3: " + dog);
        });
        console.log("after getDog");
    }

    public ngOnInit(): void 
    {
        this.observableExample();
    }
}
