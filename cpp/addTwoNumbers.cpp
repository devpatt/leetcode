/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *retList = new ListNode;
        retList->val = 0;
        
        ListNode *temp = retList;
        
        int carry = 0;
        
        while (l1 != NULL || l2 != NULL || carry != 0){            
            int a;
            if (l1 == NULL && l2 == NULL){
                a = carry;
            } else if (l1 == NULL){
                a = carry + l2->val;
            } else if (l2 == NULL){
                a = carry + l1->val;
            } else {
                a = carry + l1->val + l2->val;
            }
            temp->val = a % 10;
            
            if (a > 9){
                carry = 1;
            } else{
                carry = 0; 
            }
            
            
            if (l1 != NULL){
                l1 = l1->next;
            }
            if (l2 != NULL){
                l2 = l2->next;
            }
            
            if (l1 == NULL && l2 == NULL && carry == 0){
                temp->next == NULL;
            } else {
                temp->next = new ListNode;
                temp = temp->next;
            }
        }
        
        return retList;
        
    }
};