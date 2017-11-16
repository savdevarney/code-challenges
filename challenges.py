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

def get_annas(words):
    """ given a list of all words in the dictionary, output a data structure
    that contains all words that share an annagram. 
    (in coding challenge - key not provided - ie the sorted word string)

    >>> words = ['meat', 'team']
    >>> get_annas(words)
    {'aemt': ['meat', 'team']}
    
    """
    annas = {}
    for word in words:
        sorted_letters = sorted(word)
        key = ''.join(sorted_letters)
        if key not in annas: 
            annas[key] = [word]
        else:
            annas[key].append(word)
    return annas


def remove_dups(lst):
    """given a list of items, return a new list with duplicates removed

    >>> remove_dups([1,1,1])
    [1]

    >>> remove_dups([1, 2, 1, 1, 3])
    [1, 2, 3]
    """

    seen = set()
    result = []
    for i in lst:
        if i not in seen:
            seen.add(i)
            result.append(i)
    return result

class Node(object):
    """Class in a linked list."""

    def __init__(self, data, next=None):
        self.data = data
        self.next = next

    def as_string(self):
        """Represent data for this node and it's successors as a string.

        >>> Node(3).as_string()
        '3'

        >>> Node(3, Node(2, Node(1))).as_string()
        '321'
        """

        out = []
        n = self

        while n:
            out.append(str(n.data))
            n = n.next

        return "".join(out)

def rem_node(node):
    """ using Node class (no LL class), delete the first node or any node in
    middle. It will not be used to delete the tail node"""

    node.data = node.next.data
    node.next = node.next.next








if __name__ == "__main__":
    import doctest
    result = doctest.testmod()
    if not result.failed:
        print "ALL TESTS PASSED. GO SAV!"