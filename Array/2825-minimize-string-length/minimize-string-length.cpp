class Solution {
public:
    int minimizedStringLength(string s) {
        vector<int> freq(26, 0);
        int n = s.size();
        int ans = 0;
        for (int i = 0; i < n; i++) {
            if (!freq[s[i] - 'a']) {
                freq[s[i] - 'a']++;
                ans++; 
                       
            }
        }
        return ans;
    }
};