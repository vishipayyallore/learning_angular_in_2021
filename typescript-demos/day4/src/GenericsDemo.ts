"use strict";

export class ObjectsHolder<T> {
    private objects: T[] = [];

    public Push(value: T): void {
        this.objects.push(value);
    }

    public Pop(): T | undefined {
        return this.objects.shift();
    }
}