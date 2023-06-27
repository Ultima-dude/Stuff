const print = @import("std").debug.print;

pub fn main() void {
    //Кооменты начинаются с "//" и заканчиваются на LF байте(конце строки)
    //Строка пониже -коммент и не будет выполнена

    //print("Hello?\n", .{});

    print("Hello, world!\n", .{});
}
