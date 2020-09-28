/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
 // Runtime: 8 ms, faster than 81.43% of C++ online submissions for Merge Two Sorted Lists.
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        if (l1 == NULL && l2 == NULL) {
            return NULL;
        }
        else if (l1 == NULL && l2 != NULL) {
            return l2;
        }
        else if (l1 != NULL && l2 == NULL) {
            return l1;
        }

        ListNode* tmp1 = l1->val <= l2->val ? l1 : l2;
        ListNode* tmp2 = l1->val <= l2->val ? l2 : l1;
        ListNode* retList = tmp1;

        while (tmp1 != NULL) {
            while (tmp2 != NULL) {
                if (tmp1->val <= tmp2->val && (tmp1->next == NULL || tmp2->val <= tmp1->next->val)) { // insert node at l2 into l1
                    ListNode* temp1 = tmp1->next;
                    ListNode* temp2 = tmp2;
                    tmp2 = tmp2->next;

                    tmp1->next = temp2;
                    temp2->next = temp1;
                }
                if (tmp2 == NULL || tmp1->next == NULL || tmp2->val > tmp1->next->val) {
                    break;
                }
            }

            // if tmp2 is longer than tmp1, point next of tmp1 to tmp2 and exit
            if (tmp1->next == NULL && tmp2 != NULL) {
                tmp1->next = tmp2;
                break;
            }
            // move temp pointer down to next nodes
            tmp1 = tmp1->next;
        }

        return retList;
    }
};