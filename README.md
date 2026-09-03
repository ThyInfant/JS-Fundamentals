New js file for tutrial.


Vostro 3510@DESKTOP-D1VN9TT MINGW64 ~/Desktop/Fkre/backend (main)
$ python manage.py shell < seed_demo.py
25 objects imported automatically (use -v 2 for details).

Python 3.13.15 (tags/v3.13.15:4061bc4, Aug  5 2026, 13:05:39) [MSC v.1944 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> ... ... ... "\nSeed data for tomorrow's demo. Run with:\n    python manage.py shell < seed_demo.py\n"
>>> >>> >>> >>> >>> >>> >>> >>> >>> ... ... ... ... ... ... ... >>> >>> ... ... ... ... ... ... ... (<StaffProfile: waiter1 (waiter)>, True)
Staff: waiter1 / demo1234 -> waiter
(<StaffProfile: kitchen1 (kitchen)>, True)
Staff: kitchen1 / demo1234 -> kitchen
(<StaffProfile: butcher1 (butcher)>, True)
Staff: butcher1 / demo1234 -> butcher
(<StaffProfile: bar1 (bar)>, True)
Staff: bar1 / demo1234 -> bar
(<StaffProfile: cashier1 (cashier)>, True)
Staff: cashier1 / demo1234 -> cashier
(<StaffProfile: store1 (store_manager)>, True)
Staff: store1 / demo1234 -> store_manager
>>> >>> ... ...   File "<console>", line 3
    print("Tables 1-8 created")
    ^^^^^
SyntaxError: invalid syntax
>>> >>> >>> >>> >>> ... ... ...   File "<console>", line 4
    print("Categories created")
    ^^^^^
SyntaxError: invalid syntax
>>> >>> >>> ... ... ... ... ... ... ... ... ... ... ... ... >>> >>> ... ... ... ... ... ... ... ... ... ... ...   File "<console>", line 12
    print("Menu items created")
    ^^^^^
SyntaxError: invalid syntax
>>> >>> >>> >>> >>> >>> ... ... ... ... ... >>> ... ... ... ... >>> >>> ... ...   File "<console>", line 3
    for name, unit, qty in WHISKEY_STOCK:
    ^^^
SyntaxError: invalid syntax
>>>   File "<console>", line 1
    StockItem.objects.get_or_create(store=whiskey, name=name, defaults={"unit": unit, "quantity": qty})
IndentationError: unexpected indent
>>> Stock items created
>>> >>> >>> ... ... ... ... (<MeatIntake: ox - 2026-09-03 (180kg est.)>, True)
>>> Meat intake batch created
>>> >>>
Seed complete. Staff logins are username / demo1234 for all roles.
>>> Your existing manager/superuser account is untouched.
>>>
now exiting InteractiveConsole...
