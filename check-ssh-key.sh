# Save this as check-ssh-key.sh
if [[ $PWD == *"/Dev"* ]]; then
  ssh-add -D  # Remove all identities from the agent
  ssh-add ~/.ssh/personal_id_rsa  # Add personal key
  ssh -T git@github.com  # Test connection to GitHub with personal key
elif [[ $PWD == *"/CS"* ]]; then
  ssh-add -D  # Remove all identities from the agent
  ssh-add ~/.ssh/work_id_rsa  # Add work key
  ssh -T git@gitlab.com  # Test connection to GitLab with work key
else
  echo "Not in Dev or CS folder"
fi
