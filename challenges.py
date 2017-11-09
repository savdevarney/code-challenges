### Reverse List in Place ###

def rev_list_in_place(lst):
    """ Reverseses a list in place.
    Can not use reversed(), .reverse() or list slice

    >>> lst = [1, 2, 3]
    >>> rev_list_in_place(lst)
    >>> lst
    [3, 2, 1]

    >>> lst = [1, 2, 3, 4, 5]
    >>> rev_list_in_place(lst)
    >>> lst
    [5, 4, 3, 2, 1]

    """
    mid = len(lst) / 2
    i = 0
    while i <= mid:
        lst[-i - 1], lst[i] = lst[i], lst[-i -1]
        i += 1

    # simple solution: 
    # for i in range(len(lst) / 2):
    #     lst[i], lst[-i - 1] = lst[-i -1], lst[i]


if __name__ == "__main__":
    import doctest
    result = doctest.testmod()
    if not result.failed:
        print "ALL TESTS PASSED. GO SAV!"